from fastapi import FastAPI, HTTPException
from gr_aggregation.completeness import Completeness
from pymongo import MongoClient
from pymongo.errors import PyMongoError
from bson import ObjectId
#from gr_aggregation import aggregation as aggr
from gr_aggregation.aggregation import start_borda_count, start_completeness
from fastapi.middleware.cors import CORSMiddleware
import os

server_ip = "192.168.1.10" # your db api server
db_name = "some_db" 
mongo_username = "root"
mongo_password = "pass"
mongo_port = "27017"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"]
)

"""
Create your API consensus routes for GREAT
"""

@app.get("/consensus-group")
async def consensus(idSala: str):
    try:
        id_sala = ObjectId(idSala)
        client = MongoClient(f"mongodb://{mongo_username}:{mongo_password}@{server_ip}:{mongo_port}/?authSource=admin")
        db = client[db_name]
        collection = db["salas"]
        room = collection.find_one({ "_id": id_sala})
        
        if room is None:
            raise HTTPException(status_code=404, detail="No hay sala con ese id")

        active_users = [user for user in room.get('usuarios_activos', [])]
        waiting_room = [user["usuario"] for user in room.get('sala_espera', [])]
        favorites = [item['idItem'] for item in room.get('recomendaciones_favoritos', [])]

        ratings = []

        for user_info in active_users:
            usuario_rating = {}
            try:
                if user_info["usuario"] not in waiting_room:
                    raise HTTPException(status_code=404, detail="Faltan usuarios en la sala de espera")

                user_collection = db["usuarios"].find_one({ "_id": user_info['_id'] })
                for item in user_collection.get('calificaciones'):
                    if item['id_item'] in favorites:
                        usuario_rating[item['id_item']] = item['rating']
                ratings.append(usuario_rating)
            except (KeyError, TypeError) as e:
                print(KeyError, TypeError)

        borda_instance = start_borda_count(ratings, 2) #your prefered strategy
        return { "borda": borda_instance }

    except ConnectionError:
        raise HTTPException(status_code=500, detail="Error database connection")

    except PyMongoError:
        raise HTTPException(status_code=500, detail="Database internal error")

@app.get("/consensus-group/completeness")
async def consensus_completeness(idSala: str):
    try:
        room_id = ObjectId(idSala)
        client = MongoClient(f"mongodb://{mongo_username}:{mongo_password}@{server_ip}:{mongo_port}/?authSource=admin")
        db = client[db_name]
        collection = db["salas"]
        room = collection.find_one({ "_id": room_id})
        
        if room is None:
            raise HTTPException(status_code=404, detail="No hay sala con ese id")

        active_users = [user for user in room.get('usuarios_activos', [])]
        waiting_room = [user["usuario"] for user in room.get('sala_espera', [])]
        favorites = [item['idItem'] for item in room.get('recomendaciones_favoritos', [])]

        ratings = []

        for user_info in active_users:
            user_rating = {}
            try:
                if user_info["usuario"] not in waiting_room:
                    raise HTTPException(status_code=404, detail="Faltan usuarios en la sala de espera")

                user_collection = db["usuarios"].find_one({ "_id": user_info['_id'] })
                for item in user_collection.get('calificaciones'):
                    if item['id_item'] in favorites:
                        user_rating[item['id_item']] = int(item['rating'])
                ratings.append(user_rating)
            except (KeyError, TypeError) as e:
                print(KeyError, TypeError)

        completeness_instance = Completeness(ratings, 1)
        return { "completeness": completeness_instance.completeness_result(sort=True) }

    except ConnectionError:
        raise HTTPException(status_code=500, detail="Error database connection")

    except PyMongoError:
        raise HTTPException(status_code=500, detail="Database internal error")