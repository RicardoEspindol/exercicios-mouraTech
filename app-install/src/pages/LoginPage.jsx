import React from 'react';
import logo from '../logo.png';
import Menu from '../components/Menu';

function LoginPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-50'>
      <Menu />
      <div className='flex flex-col justify-center items-center grow bg-slate-50'>
          <div className='text-black m-auto flex flex-col items-center p-11 pb-14 bg-slate-50 '> 
          {/*  border-x-blue-900 rounded-2xl border-y-0 */}
        
              <img src={logo}></img>
              <h1 className='mt-10 text-3xl text-blue-900 font-sans font-bold'>Entre com sua conta</h1>
              <form className='mt-14 flex flex-col'>
                  <input
                    type="text"
                    name="name"
                    className='w-96 border-2 m-auto h-9 border-slate-400 border-b-0 rounded-t-xl'
                    placeholder='  E-mail'/>
                  <input
                    type="text"
                    name="name"
                    className='w-96 border-2 m-auto h-9 border-slate-400 rounded-b-xl'
                    placeholder='  Senha'/>
                    <a className='mt-3 text-blue-900 text-sm text-end font-semibold '>Forgot your password?</a>
              <input type="submit"
                value='Avançar'
                className='m-auto mt-6 p-2 w-96 bg-blue-800 rounded-lg text-slate-50 shadow-gray-50 hover:bg-blue-600 ' />
              </form>
          </div>
      </div>
    </div>
  );
}

export default LoginPage;