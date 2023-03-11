import React from 'react';
import logo from '../logo.png';

function LoginPage() {
  return (
    <div className='bg-gray-200 h-screen mt-0'>
        <div className='bg-slate-400 text-black m-auto w-3/6 h-2/3 justify-center '>
            <img src={logo} className='m-auto w-44 mt-9'></img>
            <h1 className='big-text font-bold' >Entre com sua conta</h1>
            <form className='mt-20 '>

                <input type="text" name="name" className='w-72 border-2 border-gray-700 m-auto' placeholder='E-mail'/>
                <input type="text" name="name" className='w-72 border-2 border-gray-700 m-auto' placeholder='se'/>

            <input type="submit" value="Submit" className='m-auto' />
            </form>
        </div>
    </div>
  );
}

export default LoginPage;