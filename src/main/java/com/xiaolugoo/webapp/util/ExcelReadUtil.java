package com.xiaolugoo.webapp.util;

import com.xiaolugoo.webapp.model.IndexValue;
import org.apache.poi.hssf.usermodel.HSSFDataFormat;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFCell;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @Auther: ALEX
 * @Date: 2018/6/9 11:17
 * @Description:
 */
public class ExcelReadUtil {

    private static final ExcelReadUtil excelReadUtil = new ExcelReadUtil();

    private ExcelReadUtil(){}

    //饿汉模式
    public static ExcelReadUtil getinstance(){
        return excelReadUtil;
    }

    public List<IndexValue> read(String path, String fileKey) throws IOException {
        //定义返回值
        List<IndexValue> result = new ArrayList();
        Workbook xwb = null;
        // 构造 XSSFWorkbook 对象，strPath 传入文件路径
        try {
            xwb = WorkbookFactory.create(new FileInputStream(new File(path,fileKey)));
        }catch (InvalidFormatException e){
            e.printStackTrace();
        }
        // 读取第一章表格内容
        Sheet sheet = xwb.getSheetAt(0);

        //获取行数据
        int rowNum = sheet.getLastRowNum();
        Row row = null;
        Cell cell = null;

        //从第二行开始读取数据
        for (int i = 1; i <= rowNum; i++) {
            row = sheet.getRow(i);
            //int colNum = row.getLastCellNum();
            String time = valueType(row.getCell(0)).toString();
            //如果日期为空不上传
            if ("".equals(time) || time == null){
                continue;
            }
            System.out.println(time);
            for (int j = 1; j < 11; j++) {
                IndexValue indexValue = new IndexValue();
                indexValue.setIndexId(j);
                indexValue.setIndexTime(time);
                Object obj = valueType(row.getCell(j));
                if (obj != null){
                    String str = obj.toString();
                    if (!str.isEmpty()){
                        Double value = null;
                        if (str.contains("%")){
                            value = Double.valueOf(str.substring(0,str.length()-1))*100;
                        } else {
                            value = Double.valueOf(str);
                        }
                        indexValue.setIndexValue(value);
                        result.add(indexValue);
                    }
                }

            }
        }

        return result;
    };

    //判断excel的类型 获取值
    public Object valueType(Cell cell) {
        Object value = null;
        if (cell == null){
            return "";
        }

        switch (cell.getCellType()) {
            case XSSFCell.CELL_TYPE_STRING:
                value = cell.getStringCellValue();
                break;
            case XSSFCell.CELL_TYPE_NUMERIC:
                if (HSSFDateUtil.isCellDateFormatted(cell)) {// 处理日期格式、时间格式
                    SimpleDateFormat sdf = null;
                    if (cell.getCellStyle().getDataFormat() == HSSFDataFormat.getBuiltinFormat("h:mm")) {
                        sdf = new SimpleDateFormat("HH:mm");
                    } else {// 日期
                        sdf = new SimpleDateFormat("yyyyMMdd");
                    }
                    Date date = cell.getDateCellValue();
                    value = sdf.format(date);
                } else if (cell.getCellStyle().getDataFormat() == 58) {
                    // 处理自定义日期格式：m月d日(通过判断单元格的格式id解决，id的值是58)
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
                    double dbvalue = cell.getNumericCellValue();
                    Date date = org.apache.poi.ss.usermodel.DateUtil
                            .getJavaDate(dbvalue);
                    value = sdf.format(date);
                }else if("@".equals(cell.getCellStyle().getDataFormatString())){
                    DecimalFormat df = new DecimalFormat("0");// 格式化 number String
                    value = df.format(cell.getNumericCellValue());
                }else if("=0.0%".equals(cell.getCellStyle().getDataFormatString())){
                    DecimalFormat format = new DecimalFormat("#.##############");
                    value = Double.valueOf(format.format(cell.getNumericCellValue())) ;
                }else if("0.0%".equals(cell.getCellStyle().getDataFormatString())){
                    DecimalFormat format = new DecimalFormat("#.##############");
                    value = Double.valueOf(format.format(cell.getNumericCellValue()))*100 ;
                }else {
                    DecimalFormat format = new DecimalFormat("#.##############");
                    value = format.format(cell.getNumericCellValue());
                }
                break;
            case XSSFCell.CELL_TYPE_FORMULA: // 公式
                value = cell.getCellFormula() ;
                break;
            case XSSFCell.CELL_TYPE_BOOLEAN:
                value = cell.getBooleanCellValue();
                break;
            case XSSFCell.CELL_TYPE_BLANK:
                value = "";
                break;
            default:
                value = cell.toString();
        }
        return value;
    }

}
