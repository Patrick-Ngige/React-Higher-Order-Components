// import { printProps } from "./printProps";
// import {UserInfo} from "./UserInfo";
// import { withUser } from "./WithUser";
import { UserInfoForm } from "./UserInfoForm";

// const UserInfoWrapped = printProps(UserInfo);

// const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {
	return (
		<>
		<UserInfoForm />
		{/* <UserInfoWithLoader/>
		<UserInfoWrapped a={1} b="Hello" c={{name: 'Shaun'}}/> */}
		</>
	);
}

export default App;
