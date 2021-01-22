import React, { useState, useEffect } from 'react';


const CardFilterSection = () => {

    const [dataRealEstateList, setDataRealEstateList] = useState([]);
    const [dataRealEstateListFilter, setDataRealEstateListFilter] = useState([]);

    const [inputFilter, setInputFilter] = useState();
    const [inputSelectBedroom, setInputSelectBedroom] = useState();

    const getDataRealEstateList = () => {
        fetch('https://api.arriendoasegurado.com/marketplace/?page_size=10000&country=Chile')
            .then(response => response.json())
            .then(data => {
                setDataRealEstateList(data.results);
                setDataRealEstateListFilter(data.results);
            })
    };

    const updateDataRealEstateList = (event) => {
        console.log(event.target.value);

        const realEstateListFilter = dataRealEstateList.filter(realEstate => {
            return realEstate.address.toLowerCase().includes(event.target.value.toLowerCase()) ||
                realEstate.comuna.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setDataRealEstateListFilter(realEstateListFilter);
    }


    useEffect(() => {
        getDataRealEstateList();
    }, []);

    return (

        <div id="proyectos" className="box-projects">
            <h2>Arriendos</h2>

            <input type="text" value={inputFilter} onChange={(event) => updateDataRealEstateList(event)}></input>

            <select >
                <option value="Dormitorios">Dormitorios</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

            <div >
                {
                    dataRealEstateListFilter.slice(0, 9).map((project, index) => {
                        console.log(project);
                        return (
                            <div key={index}>
                                <h4>{project.address}</h4>
                                <p>{project.comuna}</p>
                                <img style={{ width: '200px' }} src={project.photos[0].url} />
                            </div>
                        )

                    })
                }
            </div>

        </div>
    );
};

export default CardFilterSection;

