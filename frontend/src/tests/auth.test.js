import axios from 'axios'
import mockAxios from 'axios-mock-adapter'
import {signin} from '../actions/auth'

describe('signin', () => {
    let openSnackbar;
    let setLoading;
    let dispatch;
    let formData;
    let mock;

    beforeEach(() => {
        mock = new mockAxios(axios)
        mock.onPost('/users/signin').reply(200, {data: {result: {token: 'token'}, token: 'mock-token'}})
        openSnackbar = jest.fn();
        setLoading = jest.fn();
        dispatch = jest.fn();
        formData = {email: 'test@test', password: 'test'};
    });

    it('dispatches the correct action and calls openSnackbar and redirects to dashboard on success', async () => {
        await signin(formData, openSnackbar, setLoading)(dispatch);
        expect(openSnackbar).toHaveBeenCalledWith("Signin successful");
        expect(window.location.href).toBe("http://localhost/");
    });

    afterEach(() => {
        mock.reset();
    })
});