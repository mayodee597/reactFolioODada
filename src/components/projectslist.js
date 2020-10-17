import React from 'react';
import '../App.css';
import Project from './project';
import data from '../projectdata.js';
function ProjectsList() {
    return (
        <div>
            {
                data.projects.map((project) => (
                    <Project key={project.id} title={project.title} img={project.img} url={project.url}></Project>
                ))
            }
        </div>
    )
}

export default ProjectsList;