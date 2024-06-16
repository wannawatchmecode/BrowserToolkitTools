import { IBrowserToolkit } from "browser-toolkit-interface";
import { RepoBrowserToolProps, RepoBrowserTool } from "./tool";
import axios from 'axios';

export class RepoBrowserToolInstaller {
    static install(toolkit: IBrowserToolkit) {
        const props: RepoBrowserToolProps = {axios};
        const tool = new RepoBrowserTool(props);
        toolkit.addTool(tool);
    }
}
