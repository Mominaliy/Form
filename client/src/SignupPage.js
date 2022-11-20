import { useState, useMemo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from './CrowdCaveLogo.png'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import PhoneInput from 'react-phone-input-2'


async function SignUpUser(e){
    e.preventDefaul();
    console.log("Signing up");

}

function SignUp(){

  const navigate = useNavigate();

  const options = useMemo(() => countryList().getData(), [])
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const [ActiveUser , setUser] = useState(false);

  
    async function SignUpUser(e){
            e.preventDefaul();
            console.log("Signing up");

        }

    return(
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-32 w-auto"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Join Us for FREE.
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
            <a href='/' className='className="font-medium text-indigo-600 hover:text-indigo-500"'>
                SIGN-IN
            </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={SignUpUser}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
            <div>
                <div className='block text-sm font-medium text-gray-700 mt-3 mb-3'>
                    Name
                </div>
                <label htmlFor="email-address" className="sr-only">
                  Full Name
                </label>
                <input
                  id="nane"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <div className='block text-sm font-medium text-gray-700 mt-3 mb-3'>
                    Email
                </div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
              <div className='block text-sm font-medium text-gray-700 mt-3 mb-3'>
                    Password
                </div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mt-3 mb-3">
                        Country
                </label>
                <Select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"  
                    options={options}  
                      >
                      </Select>
                </div>
                <div className='w-full mt-3 mb-3'>
                    
                    <PhoneInput international
                            name="phone"
                            value={number}
                            onChange={setNumber}
                            className='mt-3 mb-3'
                            >

                    </PhoneInput>
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mt-3 mb-3">
                        User Type
                </label>
                <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-black">PassiveUser</label>
                </div>
                <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 mt-3">
                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="bordered-radio-2" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-black">ActiveUser</label>
                </div>
                </div>
                
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default SignUp;