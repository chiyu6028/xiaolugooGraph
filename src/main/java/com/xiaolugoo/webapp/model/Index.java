package com.xiaolugoo.webapp.model;

import java.util.Date;

public class Index {
    private Integer indexId;

    private String indexName;

    private Double  indexLine1;

    private Double indexLine2;

    private Double indexLine3;

    private Double indexLine4;

    private Date indexDate;

    private String indexType;

    private String indexRange;

    public Integer getIndexId() {
        return indexId;
    }

    public void setIndexId(Integer indexId) {
        this.indexId = indexId;
    }

    public String getIndexName() {
        return indexName;
    }

    public void setIndexName(String indexName) {
        this.indexName = indexName == null ? null : indexName.trim();
    }

    public Double getIndexLine1() {
        return indexLine1;
    }

    public void setIndexLine1(Double indexLine1) {
        this.indexLine1 = indexLine1;
    }

    public Double getIndexLine2() {
        return indexLine2;
    }

    public void setIndexLine2(Double indexLine2) {
        this.indexLine2 = indexLine2;
    }

    public Double getIndexLine3() {
        return indexLine3;
    }

    public void setIndexLine3(Double indexLine3) {
        this.indexLine3 = indexLine3;
    }

    public Double getIndexLine4() {
        return indexLine4;
    }

    public void setIndexLine4(Double indexLine4) {
        this.indexLine4 = indexLine4;
    }

    public Date getIndexDate() {
        return indexDate;
    }

    public void setIndexDate(Date indexDate) {
        this.indexDate = indexDate;
    }

    public String getIndexType() {
        return indexType;
    }

    public void setIndexType(String indexType) {
        this.indexType = indexType == null ? null : indexType.trim();
    }

    public String getIndexRange() {
        return indexRange;
    }

    public void setIndexRange(String indexRange) {
        this.indexRange = indexRange == null ? null : indexRange.trim();
    }
}