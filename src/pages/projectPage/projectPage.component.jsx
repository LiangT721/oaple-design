import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../data/projects.data";

import './projectPage.styles.scss';

const ProjectPage = () => {
    const param = useParams()
    console.log(param.projectId)
    const project = projects.find((item) =>item.id == param.projectId)
    console.log(project)
    return(
        <div className="project-page">
        {project.name[0]}</div>
    )
}

export default ProjectPage;