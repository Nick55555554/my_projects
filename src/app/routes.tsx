import { Route, Routes as RouterRoutes } from "react-router-dom";
import Main from "../pages/main/main";
import YraPage from "src/pages/projects/Yra";
import C1Hac from "src/pages/projects/C1Hac";
import UssrForward from "src/pages/projects/UssrForward";
export default function MyRoutes(){
    return (
        <RouterRoutes>
            <Route path="/" element={<Main/>}/>
            <Route path="/project/1" element={<YraPage/>}/>
            <Route path="/project/2" element={<UssrForward/>}/>
            <Route path="/project/3" element={<C1Hac/>}/>

        </RouterRoutes>
    );
};
