import { useQuery } from '@apollo/client';
import GET_MEDICAL_CONDITIONS from '../queries/medicalHistory/getMedicalConditions';

const useMedicalConditions = () => {
    const { loading, error, data } = useQuery(GET_MEDICAL_CONDITIONS);

    return { loading, error, data };
};

export default useMedicalConditions;
