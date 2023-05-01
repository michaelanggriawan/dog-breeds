import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/modules/redux/store';

const useAppDispatch = (): AppDispatch => useDispatch();

export default useAppDispatch;
