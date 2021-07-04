<<<<<<< HEAD
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
=======
import Image from "next/image"
>>>>>>> e19c3b566a8776676639b38cd8ace2ca79bc1d34
import Typography from "@material-ui/core/Typography"

const Home = () => {
  return (
    <>
      <Typography color="primary">Lets Start</Typography>
      <Typography color="secondary">Lets Start</Typography>
      <Typography color="error">Lets Start</Typography>
      <Typography color="textPrimary">Lets Start</Typography>
      <Typography color="textSecondary">Lets Start</Typography>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons" color="primary">Link</Button>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" disabled>Disabled</Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">Link</Button>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </>
  )
}

export default Home