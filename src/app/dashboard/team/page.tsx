// page.tsx (Server Component)import { Calendar } from "lucide-react";import { Calendar } from "lucide-react";
import { Calendar } from "lucide-react";
import { getAllUsersAction } from "./actions";
import TeamTable from "./components/team-table";
import DisplayCard from "@/components/display-card";
import PageHeaderWithForm from "@/components/page-header/page-header-with-form";

export default async function TeamPage() {
  const [users] = await getAllUsersAction();

  if (!users) {
    return <div>Failed to fetch team members</div>;
  }

  return (
    <div className="">
      <PageHeaderWithForm
        description="View contact information of all the team members."
        header="Team"
        formType="TEAM"
        buttonText="New Member"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <DisplayCard
          description="This is a description"
          icon={Calendar}
          title="Team Member"
          digit={23}
        />
        <DisplayCard
          description="This is a description"
          icon={Calendar}
          title="Team Member"
          digit={23}
        />
        <DisplayCard
          description="This is a description"
          icon={Calendar}
          title="Team Member"
          digit={23}
        />
      </div>

      <TeamTable teamMembers={users} />
    </div>
  );
}