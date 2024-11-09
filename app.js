var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    return __awaiter(this, void 0, void 0, function () {
        var name, email, objective, education, skills, experience, projects, certifications, languages, hobbies, imageInput, resumeOutput, resumeDiv, imageUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    name = document.getElementById("name").value;
                    email = document.getElementById("email").value;
                    objective = document.getElementById("objective").value;
                    education = document.getElementById("education").value;
                    skills = document.getElementById("skills").value;
                    experience = document.getElementById("experience").value;
                    projects = document.getElementById("projects").value;
                    certifications = document.getElementById("certifications").value;
                    languages = document.getElementById("languages").value;
                    hobbies = document.getElementById("hobbies").value;
                    imageInput = document.getElementById("image");
                    resumeOutput = document.getElementById("resume-output");
                    resumeDiv = document.getElementById("resume");
                    imageUrl = "";
                    if (!(imageInput.files && imageInput.files[0])) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadImage(imageInput.files[0])];
                case 1:
                    imageUrl = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    alert("Please select a profile image to complete the resume.");
                    return [2 /*return*/];
                case 3:
                    // Display the resume output section
                    resumeOutput.style.display = "block";
                    resumeDiv.innerHTML = "\n        <div>\n            <img id=\"profile-image\" src=\"".concat(imageUrl, "\" alt=\"Profile Image\">\n        </div>\n        <h3 class=\"resume-section-title\">Name</h3>\n        <p class=\"resume-item\">").concat(name, "</p>\n        <h3 class=\"resume-section-title\">Email</h3>\n        <p class=\"resume-item\">").concat(email, "</p>\n        <h3 class=\"resume-section-title\">Objective</h3>\n        <p class=\"resume-item\">").concat(objective, "</p>\n        <h3 class=\"resume-section-title\">Education</h3>\n        <p class=\"resume-item\">").concat(education, "</p>\n        <h3 class=\"resume-section-title\">Skills</h3>\n        <p class=\"resume-item\">").concat(skills.split(',').map(function (skill) { return skill.trim(); }).join(', '), "</p>\n        <h3 class=\"resume-section-title\">Experience</h3>\n        <p class=\"resume-item\">").concat(experience, "</p>\n        <h3 class=\"resume-section-title\">Projects</h3>\n        <p class=\"resume-item\">").concat(projects, "</p>\n        <h3 class=\"resume-section-title\">Certifications</h3>\n        <p class=\"resume-item\">").concat(certifications, "</p>\n        <h3 class=\"resume-section-title\">Languages</h3>\n        <p class=\"resume-item\">").concat(languages.split(',').map(function (lang) { return lang.trim(); }).join(', '), "</p>\n        <h3 class=\"resume-section-title\">Hobbies/Interests</h3>\n        <p class=\"resume-item\">").concat(hobbies, "</p>\n    ");
                    return [2 /*return*/];
            }
        });
    });
});
// Ensure this function appears only once
function loadImage(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
