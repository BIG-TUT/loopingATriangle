var makeTriangleRow = function printTriangleRow(rowNum) {
        var triangleRow = "",
            i;
        for (i = 0; i < rowNum; i++) {
            triangleRow += "#";
        };
        return triangleRow;
    },
    currentTriangleRow = 1,
    triangleSizeInRows = 7;
for (; currentTriangleRow <= triangleSizeInRows; currentTriangleRow++) {
    console.log(makeTriangleRow(currentTriangleRow));
};
