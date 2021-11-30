import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { withStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Button, OutlinedInput, InputAdornment, IconButton, CircularProgress } from "@material-ui/core";

const StyledInput = withStyles(() => ({
  root: {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3f51b5",
    },
    margin: "8px 0",
  },
  input: {
    color: "white",
  },
  notchedOutline: {
    borderColor: "#DCD4E7",
    borderWidth: "1.75px",
    borderRadius: "5px",
  },
}))(OutlinedInput);

const StyledButton = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: "5px",
    marginTop: "16px",
    padding: "8px",
    color: "white",
    background: "#644EEC",
    "&:hover": {
      background: "#644EEC",
    },
    "&.Mui-disabled": {
      color: "white",
      background: "#645E6F",
    },
  },
}))(Button);

export default function LoginForm(props) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email harus diisi",
          pattern: {
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email tidak valid",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <StyledInput error={!!error} type="text" fullWidth size="small" placeholder="Email" {...field} />
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password harus diisi",
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <StyledInput
              type={showPassword ? "text" : "password"}
              error={!!error}
              fullWidth
              size="small"
              placeholder="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    style={{ color: "white" }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              {...field}
            />
          </>
        )}
      />
      {isSubmitting ? (
        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "16px" }}>
          <CircularProgress />
        </div>
      ) : (
        <StyledButton variant="contained" type="submit" fullWidth={true} disabled={!isDirty || !isValid}>
          Masuk
        </StyledButton>
      )}
    </form>
  );
}
