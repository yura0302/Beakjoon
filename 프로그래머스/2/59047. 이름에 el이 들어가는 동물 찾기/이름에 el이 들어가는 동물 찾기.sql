SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE LOWER (NAME) LIKE LOWER("%EL%")
AND ANIMAL_TYPE ="DOG"
ORDER BY NAME