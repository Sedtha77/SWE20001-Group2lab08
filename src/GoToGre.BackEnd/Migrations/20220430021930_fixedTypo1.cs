using Microsoft.EntityFrameworkCore.Migrations;

namespace GoToGre.BackEnd.Migrations
{
    public partial class fixedTypo1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhoneNumer",
                table: "Member",
                newName: "PhoneNumber");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Member",
                newName: "PhoneNumer");
        }
    }
}
