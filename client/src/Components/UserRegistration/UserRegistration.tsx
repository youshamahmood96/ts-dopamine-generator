import { useForm } from "react-hook-form";
import { IUserModel } from '../../Interface/user.interface'
function UserRegistration() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: IUserModel) => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
       <form className="flex flex-col justify-center items-center" >
           <label htmlFor="firstname">FirstName</label>
           <input type="text"  />
           <label htmlFor="lastname">LastName</label>
           <input type="text"  />
           <label htmlFor="email">Email</label>
           <input type="text"  />
           <label htmlFor="password">Password</label>
           <input type="password" />
       </form>
    );
}

export default UserRegistration
