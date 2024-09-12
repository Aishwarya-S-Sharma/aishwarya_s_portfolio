import React from 'react'
import ProjectCard from './ProjectCard'
import netflix from '../../assets/netflix.png'
import sprintHub from '../../assets/SprintHub.png'
import ncetDms from '../../assets/ncet_dms.png'
import py_p from '../../assets/py_project.png'
const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl font-bold text-center'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
    <ProjectCard title="Netflix Clone" main="Netflix landing page clone using html and  css" image={netflix} sourceLink="https://github.com/Aishwarya-S-Sharma/Netflix-Clone.git"/>
    <ProjectCard title="SprintHub" main="Intuitive and interactive interface using React that allows users to easily manage Jira-like sprints using drag and drop feature." image={sprintHub} demoLink="https://sprint-hub-seven.vercel.app/" sourceLink="https://github.com/Aishwarya-S-Sharma/SprintHub.git"/>
    <ProjectCard title="NCET DMS" main="Designed an intuitive interface for ease of use which enabled HOD’s to upload documents securely and management to view
the documents organized by each department through a role based access control mechanism." image={ncetDms} demoLink="https://ncet-dms-master.onrender.com/"/>
<ProjectCard title="Simple Python Projects" main="Simple projects based on python Tkinter" image={py_p}  sourceLink="https://github.com/Aishwarya-S-Sharma/Python_Projects.git"/>
        </div>
    </div>
  )
}

export default Projects
