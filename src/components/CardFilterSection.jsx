import React, { useState, useEffect } from 'react';


const CardFilterSection = () => {
    const [dataRealEstateList, setDataRealEstateList] = useState([]);
    const [inputFilter, setInputFilter] = useState('');
    const [inputSelectBedrooms, setInputSelectBedrooms] = useState('-1');

    const getDataRealEstateList = () => {
        fetch('https://api.arriendoasegurado.com/marketplace/?page_size=10000&country=Chile')
            .then(response => response.json())
            .then(data => {
                setDataRealEstateList(data.results);
            })
    };

    const updateInputFilter = (event) => {
        setInputFilter(event.target.value);


    };

    const updateInputSelectBedroom = (event) => {
        setInputSelectBedrooms(event.target.value);

    };

    const filterCriteria = (realEstate) => {
        return (realEstate.address.toLowerCase().includes(inputFilter.toLowerCase()) ||
            realEstate.comuna.toLowerCase().includes(inputFilter.toLowerCase())) &&
            filterBySelectBedroom(realEstate);
    };

    const filterBySelectBedroom = (realEstate) => {
        if (inputSelectBedrooms === '-1') {
            return true;
        }
        return realEstate.property_details[0].dormitorios.toString() === inputSelectBedrooms;
    }

    useEffect(() => {
        getDataRealEstateList();
    }, []);

    return (

        <div >
            <h2>Arriendos</h2>

            <input type='text' value={inputFilter} onChange={(event) => updateInputFilter(event)}></input>

            <select value={inputSelectBedrooms} onChange={(event) => updateInputSelectBedroom(event)}>
                <option value="-1">Dormitorio</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <div >
                {
                    dataRealEstateList.filter(realEstate => {
                        return filterCriteria(realEstate);
                    }).slice(0, 9).map((project, index) => {
                        return (
                            <div key={index}>
                                <img style={{ width: '200px' }} src={project.photos[0].url} />
                                <h4>{project.address}</h4>
                                <p>{project.comuna}</p>
                                <p>Dormitorios: {project.property_details[0].dormitorios}</p>
                                <p>Baños: {project.property_details[0].banos}</p>
                            </div>
                        )

                    })
                }
            </div>

        </div>
    );
};

export default CardFilterSection;
