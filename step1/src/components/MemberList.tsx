import MemberCard from './MemberCard'
import './MemberList.css'

type Member = {
  name: string
  role: string
  bio: string
  imageUrl?: string
}

type Props = {
  members: Member[]
}

function MemberList({ members }: Props) {
  return (
    <div className="member-list">
      {members.map((member) => (
        <MemberCard
          key={member.name}
          name={member.name}
          role={member.role}
          bio={member.bio}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  )
}

export default MemberList
