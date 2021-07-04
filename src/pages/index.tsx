import Image from "next/image"
import Typography from "@material-ui/core/Typography"

const Home = () => {
  return (
    <>
      <Typography color="primary">Lets Start</Typography>
      <Typography color="secondary">Lets Start</Typography>
      <Typography color="error">Lets Start</Typography>
      <Typography color="textPrimary">Lets Start</Typography>
      <Typography color="textSecondary">Lets Start</Typography>
      <Image className="rotating" src="/assets/victory.png" alt="victory" width="100px" height="100px" />
    </>
  )
}

export default Home