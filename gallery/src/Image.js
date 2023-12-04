import data from "./data";
import ImageStyles from "./modules/Image.module.css";

const Image = () => {
  return (
    <div className={ImageStyles.imageCard}>
        {data.map((item, index) => (
            <div key={index}>
                <div className={ImageStyles.transporter}>
                   <img className={ImageStyles.picture} src={item.src.large} alt="" />
                </div>
                <h3 className={ImageStyles["imageCaption"]}>{item.photographer}</h3>
            </div>
        ))}
    </div>
  )
}

export default Image