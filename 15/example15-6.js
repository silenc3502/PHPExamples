<script>
function User(forename, username, password)
{
	this.forename = forename
	this.username = username
	this.password = password
	this.showUser = showUser
}

function showUser()
{
	document.write("Forename: " + this.forename + "<br />")
	document.write("Username: " + this.username + "<br />")
	document.write("Password: " + this.password + "<br />")
}
</script>