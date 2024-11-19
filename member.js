function skillsMember()
{
  // Get the member's skills
  var memberSkills = document.getElementById("memberSkills").value;
  // Get the member's name
  var memberName = document.getElementById("memberName").value;
  // Get the member's role
  var memberRole = document.getElementById("memberRole").value;
  // Get the member's email
  var memberEmail = document.getElementById("memberEmail").value;
  // Get the member's phone
  var memberPhone = document.getElementById("memberPhone").value;
  // Get the member's image URL
  var memberImage = document.getElementById("memberImage").value;

  // Create the member object
  var member = {
    name: memberName,
    role: memberRole,
    email: memberEmail,
    phone: memberPhone,
    image: memberImage,
    skills: memberSkills
  };

  // Add the member to the members array
  members.push(member);

  // Display the member
  displayMember(member);
}