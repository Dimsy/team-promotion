import { utils, writeFile } from 'sheetjs-style';
import {IPlayer} from "./Models";

interface IBaseProps {
    createExcelRow: (a: any, b: number) => Record<string, any>;
    excelColumnsNames: {columnName: string; width?: number}[];
    fileName: string;
}

interface ICreateSheetsProps extends IBaseProps {
    docsByStatuses: Record<string, any[]>;
}
interface IDownloadXLSXProps extends IBaseProps {
    list: any[];
    onEmptyListFn?: () => void;
}

export const createSheets = async ({ docsByStatuses, createExcelRow, excelColumnsNames, fileName } : ICreateSheetsProps) => {
    const worksheets = Object.keys(docsByStatuses).map((status) => {
        const toExcel = docsByStatuses[status].map(createExcelRow);
        const worksheet = utils.json_to_sheet(toExcel);
        const columnNames = excelColumnsNames.map((h) => h.columnName);
        utils.sheet_add_aoa(worksheet, [columnNames], { origin: 'A1' });

        worksheet['!cols'] = excelColumnsNames.map((v) => ({ width: v.width || v.columnName.length + 8 }));
        worksheet['!rows'] = [{ hpx: 50 }];

        const borderStyle = { color: { rgb: 'C4BEBE' }, style: 'thin' };

        Object.keys(worksheet).forEach((cell) => {
            if (cell.includes('!ref')) return;
            worksheet[cell].s = {
                alignment: {
                    vertical: 'top',
                    wrapText: true,
                },
                ...(columnNames.includes(worksheet[cell].v)
                    && { fill: { pattern: 'solid', fgColor: { rgb: '21A19A' }, bgColor: { rgb: '21A19A' } },
                        font: { bold: true, color: { rgb: 'FFFFFF' } },
                        alignment: {
                            vertical: 'center',
                            horizontal: 'center',
                            wrapText: true,
                        },
                        border: {
                            bottom: borderStyle,
                            left: borderStyle,
                            right: borderStyle,
                        } }),
            };
        });

        return {
            worksheet,
            status,
        };
    });
    const workbook = utils.book_new();

    worksheets.forEach((ws) => {
        utils.book_append_sheet(workbook, ws.worksheet, ws.status);
    });

    writeFile(workbook, fileName);
};

export const createXlXSFile = async (worksheets, fileName) => {
    const workbook = utils.book_new();

    worksheets.forEach((ws) => {
        utils.book_append_sheet(workbook, ws.worksheet, ws.status);
    });

    writeFile(workbook, fileName);
};

export const downloadXLSXReport = async ({ list, createExcelRow, excelColumnsNames, fileName }: IDownloadXLSXProps) => {
    const pep = { 'tech-priests': list}
    await createSheets({ docsByStatuses: pep, createExcelRow, excelColumnsNames, fileName });
};

const createExcelRow = (d: IPlayer, idx) => ({
    number: idx + 1,
    type: d.type,
    grade: d.company === 'Сбер' ? d.level : '-',
    position: d.position,
    city: d.city,
    hardSkills: d.skills.join(", "),
    specs: d.specs.join(", ")
});
const excelColumnsNames = [
    { columnName: '№', width: 5 }, { columnName: 'Специальность', width: 15 }, { columnName: 'Грейд', width: 7 },
    { columnName: 'Должность', width: 25 }, { columnName: 'Город' }, { columnName: 'Hard skills', width: 70 },
    { columnName: 'Specs', width: 30 },
];

export const onDownloadXLSXReportHandler = async (list) => {
    await downloadXLSXReport({
        list,
        excelColumnsNames,
        createExcelRow,
        fileName: 'Tech-Priests.xlsx',
    });
};
