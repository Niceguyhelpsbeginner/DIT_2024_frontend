data = "202433183   구동현   010-4665-0291   202441233   권재현   010-4071-4659   202432067   기연지   010-2089-1854   202445379   김건엽   010-6414-2103   202435658   김명인   010-4514-9971   202434285   김성진   010-9798-5937   202430763   김영택   010-3309-2192   202441280   김지훈   010-9954-5914   202441145   김진우   010-3396-4697   202430099   문진혁   010-6289-5732   202433882   배진우   010-2435-6052   202420201   백승연   010-3646-9978   202430636   백주현   010-2190-7829   202431441   옥동진   010-2677-2386   201941349   유대웅   010-2731-7764   202445354   이동현   010-4764-2942   202433071   이예진   010-4422-7046   202431409   이현규   010-7684-6515   202443661   장윤지   010-6414-9288   202430985   장진우   010-5018-6697   202430554   최병권   010-2210-3958   202430952   추상헌   010-4314-4649   202432421   하재범   010-8329-5622   202430971   한서진   010-8381-9723"

data = data.split("  ")

student_numbers = []
student_names = []
student_phones = []

for i in range(len(data)):
    if (i+1) % 3 == 1:
        student_numbers.append(data[i])
for i in range(len(data)):
    if (i+2) % 3== 0:
        student_names.append(data[i])
        
for i in range(len(data)):
    if (i) % 3== 2:
        student_phones.append(data[i])
        
for i in range(len(student_numbers)):
    print(f"insert into student values ({i+1}, {student_numbers[i]}, '{student_names[i]}', '{student_phones[i]}', '0{i}');")
