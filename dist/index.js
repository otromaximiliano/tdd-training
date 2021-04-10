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
var whitelist = ['http://cucherexpress.com', 'http://cucherexpress.com'];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/auth", auth_1.auth);
app.listen(port, "localhost", () => {
    console.log(`Server on port ${port}, link: http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixnREFBd0I7QUFDeEIsaUNBQThCO0FBQzlCLE1BQU0sR0FBRyxHQUF3QixpQkFBTyxFQUFFLENBQUM7QUFDM0MsTUFBTSxJQUFJLEdBQUksSUFBSSxDQUFDO0FBRW5CLElBQUksU0FBUyxHQUFrQixDQUFDLDBCQUEwQixFQUFFLDBCQUEwQixDQUFDLENBQUM7QUFFeEYsSUFBSSxXQUFXLEdBQUc7SUFDaEIsTUFBTSxFQUFFLFVBQVUsTUFBYyxFQUFFLFFBQWE7UUFDN0MsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3BDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDckI7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7U0FDM0M7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQUVELEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxFQUFFLENBQUMsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLFdBQUksQ0FBQyxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSw0QkFBNEIsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4RSxDQUFDLENBQUMsQ0FBQSJ9