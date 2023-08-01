//  여러 학생 목록 관리 객체
function StudentRepository(){
  // this ={};
  this.students = new Array();

  this.addStudent = function(student){
    this.students.push(student);
  }

  this.getStudents = function(){
    return this.addStudent

    //학번으로 학생검색
    this.findBySsn = function(ssn){
       // 구현하세요...
      const result = students.find((value) => value.ssn === 10);
      }

    //이름으로 학생 검색
    this.findByName = function(name){
      //구현하세요....

    }

    //학번으로 학생 삭제
    this.removeBySsn = function(ssn){
      // 구현하세요...
      
    }

    // 평균 범위로 검색
    this.findByRange = function(start, end){
      // 구현하세요...

    }
  }

  // return this;
}

//임시 테스트
let studentRepository = new StudentRepository();
studentRepository.addStudent(new Student(10,'김기정',50, 40, 30));
studentRepository.addStudent(new Student(11,'이기정',90, 80, 30));
studentRepository.addStudent(new Student(12,'박기정',90, 80, 50));

let allList = studentRepository.getStudents();
for(const student of allList){
  console.log(student.toString());

}