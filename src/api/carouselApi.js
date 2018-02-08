import axios from "axios";
import config from "../../config";

class CarouselApi {
  static getAllCarousels() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const resp = await axios.get(
          `http://${config.host}:${config.port}/carousel`
        );
        resolve(Object.assign([], resp.data));
      }, 0);
    });
  }
}

export default CarouselApi;
