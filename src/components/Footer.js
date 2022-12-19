import React ,{useState, useEffect} from 'react'
import styled from 'styled-components';

 const Footer = () => {
    const [Year, setYear] = useState();
    useEffect(() => {
        const getYear = () => setYear(new Date().getFullYear());
        getYear();
    }, []);
  return (
    <div className='footer'>
        <CopyRight><p>&copy; Touropedia-By Kaushal Chakardhari.   All Rights Reserved {Year}</p></CopyRight>
    </div>
  )
}
const CopyRight = styled.div`
    text-align: center;
    p{
        font-size: 1.2rem;
        @media screen and (min-width: 280px) and (max-width: 767px){
            font-size: 1rem;
        }
    }
`;

export default Footer;