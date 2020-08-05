import React from 'react'
//import { Link } from 'react-router-dom'

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os Proffys disponiveis.">

                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" className="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" className="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" className="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />

            </main>
        </div>
    )
}

export default TeacherList;