import BgModel from "../model/bgModel";
import BgView from "../view/bgView";

class BackgroundController {
  private backgroundModel: BgModel;
  private backgroundView: BgView;

  constructor(view: BgView, model: BgModel) {
    this.backgroundView = view;
    this.backgroundModel = model;

    this.onBackgroundChanged();
  }

  onBackgroundChanged = () => {
    this.backgroundView.paintImg(this.backgroundModel.createRandomBG());
  };
}

export default BackgroundController;
