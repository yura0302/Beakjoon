SELECT PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO,"NONE")
FROM PATIENT
WHERE (AGE<=12 and GEND_CD ="W")
ORDER BY AGE DESC, PT_NAME ASC
