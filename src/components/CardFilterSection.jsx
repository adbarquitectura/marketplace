import React, { useState, useEffect } from 'react';
import './CardFilterSection.css';

import { Icon, InlineIcon } from '@iconify/react';
import hospitalBed from '@iconify/icons-carbon/hospital-bed';
import outlineBathtub from '@iconify/icons-ic/outline-bathtub';
import carOutline from '@iconify/icons-ion/car-outline';
import searchIcon from '@iconify/icons-feather/search';

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

        <div className='card-filter-section'>
            <h1 className='heading-display'>Encuentra un arriendo</h1>
            <div>
                <div>
                    <input type='text' value={inputFilter} placeholder="Calle, comuna" onChange={(event) => updateInputFilter(event)}></input>
                    <Icon icon={searchIcon} style={{ color: '#FFE7DC', fontSize: '30px' }} />
                </div>

                <select value={inputSelectBedrooms} onChange={(event) => updateInputSelectBedroom(event)}>
                    <option value="-1">Dormitorio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <h4>En Houm no te pedimos aval y hacemos de tu vida algo maravilloso. Entérate de todos los beneficios al arrendar con nosotros.</h4>

            <div className='card-section'>
                <div className='card-box'>
                    {
                        dataRealEstateList.filter(realEstate => {
                            return filterCriteria(realEstate);
                        }).slice(0, 9).map((project, index) => {
                            return (
                                <div key={index} className='card'>
                                    <img className='img-card' src={project.photos[0].url} />
                                    <div className='icons-card-box'>
                                        <h4>{project.type}</h4><span>{project.property_details[0].m_construidos}m2</span>
                                    </div>

                                    <div className='icons-card-box'>
                                        <div className='icons-card'><Icon icon={hospitalBed} style={{ color: '#999999', fontSize: '30px' }} />
                                            <h3>{project.property_details[0].dormitorios}</h3></div>
                                        <div className='icons-card'><Icon icon={outlineBathtub} style={{ color: '#999999', fontSize: '30px' }} />
                                            <h3>{project.property_details[0].banos}</h3></div>
                                        <div className='icons-card'>
                                            <Icon icon={carOutline} style={{ color: '#999999', fontSize: '30px' }} />
                                            <h3>{project.property_details[0].banos}</h3>
                                        </div>
                                    </div>
                                    <div className='name-card-box'>
                                        <h2>{project.address}</h2>
                                        <p>{project.comuna}</p>
                                    </div>
                                    <div className='value-card-box'>
                                        <h3>${project.property_details[0].valor}</h3>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default CardFilterSection;
