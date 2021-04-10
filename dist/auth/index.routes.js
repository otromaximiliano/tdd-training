"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = __importDefault(require("express"));
exports.auth = express_1.default.Router();
exports.auth.get("/", (req, res) => {
    try {
        res.send("Hi in Auth route");
    }
    catch (error) {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXV0aC9pbmRleC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQThCO0FBRWpCLFFBQUEsSUFBSSxHQUFvQixpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXRELFlBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3pCLElBQUk7UUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7S0FDN0I7SUFBQyxPQUFPLEtBQUssRUFBRTtLQUVmO0FBQ0gsQ0FBQyxDQUFDLENBQUEifQ==