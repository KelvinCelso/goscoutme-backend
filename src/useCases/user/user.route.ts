import { Route } from "../../decorators/module.decorator";
import { userController } from "./user.controller";

@Route([userController])
export class userRoutes {
  // Add route logic here if needed
}
