import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import doc from "../../assets/images/document.png";
import "./style.css";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const DragDrop = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    const allFiles = [...files, ...acceptedFiles]; //save all files here
    console.log(allFiles);
    setFiles(allFiles);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="container my-5">
      <Container {...getRootProps()} className="input-area ">
        <input {...getInputProps()} />
        <img src={doc} alt="doc" width={30} />
        <p className="primary-color my-4">
          Drag & Drop Here or <b>Browse</b>
        </p>
        <Button className="btn-primary">Upload Manifest</Button>
      </Container>
      <div className="mt-4">
        {files.map((file) => (
          <div className="flex-between-center">
            <p>
              {" "}
              <img src={doc} width={20} alt="file" className="me-2" />
              {file.path}
            </p>
            <p>{file.size}Kb</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDrop;
