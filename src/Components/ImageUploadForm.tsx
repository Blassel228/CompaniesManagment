import {getImage, uploadImage} from "../Api/imageApi.tsx";
import { useState } from "react";
import styled from "styled-components";
import {ImageCircleView} from "./ImageCircleView.tsx";
import {UploadActionButton} from "./Button.tsx";
import {ErrorText} from "./Error.tsx";
import {UploadImage} from "./UploadImage.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Store/store.tsx";
import {setProfileImage} from "../Store/slices/authorizedUserSlice.tsx";

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const image = useSelector((state: RootState) => state.user.user.profileImage);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      setPreview(URL.createObjectURL(files[0]));
    }
  };

  const handleUpload = async () => {
    try{
        if (selectedFile) {
          await uploadImage(selectedFile);
          const image = await getImage(user.id);
          dispatch(setProfileImage(image.image_data));
          setSelectedFile(null);
          setPreview(null);
        } else {
          setError("Please select a file to upload");
        }
    }

    catch(error){
        throw new Error(error.message);
    }

    finally {
        setError(null);
    }
  };

  return (
  <UploadContainer>
    <HiddenFileInput
      type="file"
      id="fileUpload"
      onChange={handleFileChange}
      accept="image/*"
    />
    <ImageCircleView size="large" htmlFor="fileUpload" hasimage={!!preview || !!image}>
      {preview ? (
        <UploadImage src={preview} alt="Uploaded" />
      ) : image ? (
        <UploadImage src={`data:image/png;base64,${image}`} alt="Profile" />
      ) : (
        <UploadImage/>
      )}
    </ImageCircleView>
    <UploadActionButton onClick={handleUpload} disabled={!selectedFile}>
      Upload Image
    </UploadActionButton>
    {error ? <ErrorText>Error: {error}</ErrorText> : undefined}
  </UploadContainer>
);

};

export default ImageUploadForm;
