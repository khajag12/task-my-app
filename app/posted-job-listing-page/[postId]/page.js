"use client"

import ProposalCard from "@/app/posted-job-listing-page/[postId]/ProposalCard";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Proposal() {
     
  const router = useRouter();
  console.log(router);
/*useEffect(()=>{
  const {postId} = router.query;

  console.log(postId);
},[router]);
  
*/

  
  return (
    <div>
      <ProposalCard />
    </div>
  );
}

export default Proposal;
