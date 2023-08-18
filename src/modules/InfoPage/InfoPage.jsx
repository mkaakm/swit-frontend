import AboutCompany from '../AboutCompany';

import {getPage} from "../../shared/lib/api/pages";

const InfoPage = (id) => {
    return async () => {
        const info = await getPage(id);

        return <AboutCompany info={info}/>
    }
}

export default InfoPage;
