import './MemberCard.css'

type Props = {
  name: string
  role: string
  bio: string
  imageUrl?: string
}

function MemberCard({ name, role, bio, imageUrl }: Props) {
  return (
    <div className="member-card">
      {imageUrl ? (
        <img className="member-avatar" src={imageUrl} alt={name} />
      ) : (
        <div className="member-avatar-placeholder">{name[0]}</div>
      )}
      <h2 className="member-name">{name}</h2>
      <p className="member-role">{role}</p>
      <p className="member-bio">{bio}</p>
    </div>
  )
}

export default MemberCard
