import ImageUploadForm from "../Components/ImageUploadForm.tsx";
import Navbar from "../Components/Navbar.tsx";
import {FormLayout} from "../Components/FormLayout.tsx";

export function AccountPage(){
    return(
    <>
        <Navbar/>
        <FormLayout>
            <ImageUploadForm/>
        </FormLayout>
    </>)
}