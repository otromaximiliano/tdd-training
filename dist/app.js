"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./auth");
const app = express_1.default();
const port = 3000;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/auth", auth_1.auth);
app.listen(port, () => {
    console.log(`Server on port ${port}, link: http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLGdEQUF3QjtBQUN4QixpQ0FBOEI7QUFDOUIsTUFBTSxHQUFHLEdBQXdCLGlCQUFPLEVBQUUsQ0FBQztBQUMzQyxNQUFNLElBQUksR0FBSSxJQUFJLENBQUM7QUFFbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsV0FBSSxDQUFDLENBQUM7QUFFdEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksNEJBQTRCLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDLENBQUEifQ==