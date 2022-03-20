//Packages
import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

//Icons/Assets
import { BiArrowBack } from "react-icons/bi";

//Components
import TextField from "@mui/material/TextField";
import UploadFiles from "../../../components/UploadFiles/UploadFiles";
import Button from "@mui/material/Button";

//Styles
import { StyledForm } from "../../../../styles/form.styles";

//Hooks
import useControllers from "../../../../controllers";

const CreateFile = (props) => {
  const { handleChangeScreen, screenActive } = props;

  const { useScreenHooks } = useControllers();
  const { useAdminControllers } = useScreenHooks();
  const { useDocumentManagment } = useAdminControllers();
  const {
    register,
    errors,
    handleSubmit,
    formCreateUrl,
    handleUploadMediaFile,
    handleGetUrlMediaFile,
  } = useDocumentManagment({
    screenActive,
    handleChangeScreen,
  });

  return (
    <>
      <BiArrowBack
        className="cursor-pointer w-8 h-8"
        onClick={() => {
          handleChangeScreen(0);
        }}
      />

      <h2 className="text-center font-bold text-2xl"> Crear Documento </h2>

      <StyledForm>
        <TextField
          id="nombreDocumento"
          name="nombreDocumento"
          label="Nombre del documento"
          variant="standard"
          className="block w-full lg:w-1/2"
          type="text"
          error={errors["nombreDocumento"]?.message}
          helperText={errors["nombreDocumento"]?.message}
          required
          {...register("nombreDocumento")}
        />
        <Controller
          name="urlDocumento"
          control={formCreateUrl.control}
          render={({ field: { name, onChange } }) => {
            return (
              <UploadFiles
                className="w-full lg:w-1/2"
                name={name}
                accept="application/pdf,image/*,application/vnd.ms-excel,application/msword"
                errors={formCreateUrl.formState.errors}
                onChange={(event) => handleGetUrlMediaFile({ event, onChange })}
              />
            );
          }}
        />
        <Button
          variant="contained"
          className="w-40"
          onClick={handleSubmit(handleUploadMediaFile)}
        >
          {" "}
          Cargar Documento
        </Button>
      </StyledForm>
    </>
  );
};

CreateFile.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
  screenActive: PropTypes.number.isRequired,
};

export default CreateFile;
