import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Formik, Form, Field, ErrorMessage } from 'formik';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const EncuestaTK = () => {
    const { t, i18n } = useTranslation("paginas/test_tk")

    const idSala = useParams().id
    const navigate = useNavigate()

    const initialValuesForm = {
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
        question10: "",
        question11: "",
        question12: "",
        question13: "",
        question14: "",
        question15: "",
        question16: "",
        question17: "",
        question18: "",
        question19: "",
        question20: "",
        question21: "",
        question22: "",
        question23: "",
        question24: "",
        question25: "",
        question26: "",
        question27: "",
        question28: "",
        question29: "",
        question30: "",
    }

    const questionStyle = {
        marginBottom: "20px"
    }

    const radioCheckStyle = {
        marginRight: "60px",
    }

    const enviarCuestionario = async (values) => {
        if ( 
        !values.question1 || 
        !values.question2 || 
        !values.question3 || 
        !values.question4 || 
        !values.question5 || 
        !values.question6 || 
        !values.question7 || 
        !values.question8 || 
        !values.question9 || 
        !values.question10 ||
        !values.question11 ||
        !values.question12 ||
        !values.question13 ||
        !values.question14 ||
        !values.question15 ||
        !values.question16 ||
        !values.question17 ||
        !values.question18 ||
        !values.question19 ||
        !values.question20 ||
        !values.question21 ||
        !values.question22 ||
        !values.question23 ||
        !values.question24 ||
        !values.question25 ||
        !values.question26 ||
        !values.question27 ||
        !values.question28 ||
        !values.question29 ||
        !values.question30
        ) {
            console.log(values)
            window.alert(`${t('main.alert')}`)
        }
        else {
            const encuesta = {
                idUsuario: sessionStorage.getItem("id_usuario"),
                idSala: idSala,
                respuestas: values
            }
            const req = await api.post("/enviar-encuesta-tk", (encuesta))
            if (req.data.resp === "ok"){
                navigate("/room-end")
            }
        }
    }

    return (
        <>
            <div className="container" style={{ maxWidth: "800px" }}>
            <div className="columns">
                <div className="column">
                    <p className="is-size-1 has-text-centered">{t('main.title')}</p>
                </div>
            </div>
            <div className="box" style={{ border: "1px solid #000"}}>
                <div className="columns">
                    <div className="column">
                        <div className="block">
                            <p className="is-size-4 has-text-centered has-text-justified">{t('main.subtitle')}</p>
                            <p className="is-size-6 has-text-centered has-text-justified">
                                {t('main.instructions1')}
                                <span className="has-text-weight-bold"> {t('main.dimensionCompeticion')}</span>, <span className="has-text-weight-bold"> {t('main.dimensionConciliador')}</span>, <span className="has-text-weight-bold"> {t('main.dimensionEvitador')}</span>, <span className="has-text-weight-bold"> {t('main.dimensionColaborador')}</span> {t('main.and')} <span className="has-text-weight-bold"> {t('main.dimensionNegociador')}</span>. 
                                {t('main.instructions2')}
                            </p>
                        </div>
                        <div className="block">
                            <p className="is-size-4 has-text-centered has-text-justified">{t('main.questionnaireTitle')}</p>
                        </div>
                        <div>
                    <Formik
                        initialValues={initialValuesForm}
                        onSubmit={enviarCuestionario}
                    >
                        <Form>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">1.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question1" value="A" />
                                        <span> {t('main.questionnaire.1.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question1" value="B" />
                                        <span> {t('main.questionnaire.1.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">2.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question2" value="A" />
                                        <span> {t('main.questionnaire.2.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question2" value="B" />
                                        <span> {t('main.questionnaire.2.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">3.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question3" value="A" />
                                        <span> {t('main.questionnaire.3.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question3" value="B" />
                                        <span> {t('main.questionnaire.3.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">4.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question4" value="A" />
                                        <span> {t('main.questionnaire.4.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question4" value="B" />
                                        <span> {t('main.questionnaire.4.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">5.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question5" value="A" />
                                        <span> {t('main.questionnaire.5.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question5" value="B" />
                                        <span> {t('main.questionnaire.5.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">6.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question6" value="A" />
                                        <span> {t('main.questionnaire.6.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question6" value="B" />
                                        <span> {t('main.questionnaire.6.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">7.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question7" value="A" />
                                        <span> {t('main.questionnaire.7.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question7" value="B" />
                                        <span> {t('main.questionnaire.7.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">8.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question8" value="A" />
                                        <span> {t('main.questionnaire.8.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question8" value="B" />
                                        <span> {t('main.questionnaire.8.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">9.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question9" value="A" />
                                        <span> {t('main.questionnaire.9.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question9" value="B" />
                                        <span> {t('main.questionnaire.9.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">10.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question10" value="A" />
                                        <span> {t('main.questionnaire.10.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question10" value="B" />
                                        <span> {t('main.questionnaire.10.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">11.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question11" value="A" />
                                        <span> {t('main.questionnaire.11.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question11" value="B" />
                                        <span> {t('main.questionnaire.11.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">12.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question12" value="A" />
                                        <span> {t('main.questionnaire.12.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question12" value="B" />
                                        <span> {t('main.questionnaire.12.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">13.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question13" value="A" />
                                        <span> {t('main.questionnaire.13.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question13" value="B" />
                                        <span> {t('main.questionnaire.13.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">14.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question14" value="A" />
                                        <span> {t('main.questionnaire.14.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question14" value="B" />
                                        <span> {t('main.questionnaire.14.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">15.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question15" value="A" />
                                        <span> {t('main.questionnaire.15.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question15" value="B" />
                                        <span> {t('main.questionnaire.15.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">16.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question16" value="A" />
                                        <span> {t('main.questionnaire.16.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question16" value="B" />
                                        <span> {t('main.questionnaire.16.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">17.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question17" value="A" />
                                        <span> {t('main.questionnaire.17.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question17" value="B" />
                                        <span> {t('main.questionnaire.17.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">18.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question18" value="A" />
                                        <span> {t('main.questionnaire.18.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question18" value="B" />
                                        <span> {t('main.questionnaire.18.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">19.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question19" value="A" />
                                        <span> {t('main.questionnaire.19.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question19" value="B" />
                                        <span> {t('main.questionnaire.19.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">20.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question20" value="A" />
                                        <span> {t('main.questionnaire.20.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question20" value="B" />
                                        <span> {t('main.questionnaire.20.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">21.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question21" value="A" />
                                        <span> {t('main.questionnaire.21.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question21" value="B" />
                                        <span> {t('main.questionnaire.21.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">22.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question22" value="A" />
                                        <span> {t('main.questionnaire.22.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question22" value="B" />
                                        <span> {t('main.questionnaire.22.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">23.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question23" value="A" />
                                        <span> {t('main.questionnaire.23.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question23" value="B" />
                                        <span> {t('main.questionnaire.23.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">24.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question24" value="A" />
                                        <span> {t('main.questionnaire.24.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question24" value="B" />
                                        <span> {t('main.questionnaire.24.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">25.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question25" value="A" />
                                        <span> {t('main.questionnaire.25.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question25" value="B" />
                                        <span> {t('main.questionnaire.25.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">26.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question26" value="A" />
                                        <span> {t('main.questionnaire.26.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question26" value="B" />
                                        <span> {t('main.questionnaire.26.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">27.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question27" value="A" />
                                        <span> {t('main.questionnaire.27.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question27" value="B" />
                                        <span> {t('main.questionnaire.27.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">28.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question28" value="A" />
                                        <span> {t('main.questionnaire.28.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question28" value="B" />
                                        <span> {t('main.questionnaire.28.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">29.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question29" value="A" />
                                        <span> {t('main.questionnaire.29.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question29" value="B" />
                                        <span> {t('main.questionnaire.29.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div style={questionStyle}>
                                <label className="is-size-6 has-text-weight-bold">30.</label>
                                <div className="is-size-6 has-text-left options" style={{ marginTop: "20px" }}>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question30" value="A" />
                                        <span> {t('main.questionnaire.30.A')}</span>
                                    </label>
                                    <br/>
                                    <label style={radioCheckStyle}>
                                        <Field type="radio" name="question30" value="B" />
                                        <span> {t('main.questionnaire.30.B')}</span>
                                    </label>
                                </div>
                            </div>
                            <div className="has-text-centered" style={{ paddingTop: 40}}>
                                <button type="submit" className="button is-primary is-rounded" >{t('main.button')}</button>
                            </div>
                        </Form>
                    </Formik>
                    </div>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}

export default EncuestaTK