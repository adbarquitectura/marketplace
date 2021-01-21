import React, { useState, useEffect } from 'react';

const CardFilterSection = () => {

    const [dataProject, setDataProject] = useState([]);

    const getDataProject = () => {
        fetch('https://api.arriendoasegurado.com/marketplace/?page_size=10000&country=Chile')
            .then(response => response.json())
            .then(data => setDataProject(data.results));        
    };

    useEffect(() => {
        getDataProject();
    }, []);

    return (

        <div id="proyectos" className="box-projects">
            <h2>Arriendos</h2>
            <div >
                {
                    dataProject.map((project, index) => {
                        console.log(project);                       
                    
                    })
                }
            </div>

        </div>
    );
};

export default CardFilterSection;