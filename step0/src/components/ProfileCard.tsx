import './ProfileCard.css'

type Props = {
  name: string
  role: string
  bio: string
}

function ProfileCard({ name, role, bio }: Props) {
  return (
    <div className="profile-card">
      <div className="profile-avatar">{name[0]}</div>
      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>
      <p className="profile-bio">{bio}</p>
    </div>
  )
}

export default ProfileCard
